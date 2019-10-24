<template>
  <div class="tagview">
    <template v-if="$store.state.settings.tagsView">
      <ul>
        <li
          v-for="tag in visitedViews"
          :key="tag.path"
          :class="isActive(tag) ? 'active' : ''"
          @click.middle.native="closeSelectedTag(tag)"
          @click.prevent.native="openMenu(tag, $event)"
        >
          <router-link
            ref="tag"
            :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
            tag="span"
            class="tags-view-item"
          >
            {{ tag.name }}
            <span
              v-if="!tag.meta.affix"
              class="el-icon-close"
              @click.prevent.stop="closeSelectedTag(tag)"
            />
          </router-link>
        </li>
      </ul>
      <el-dropdown style="position:absolute;right:0;top:-7px;margin:0 15px;">
        <el-button class="el-dropdown-link ea_header_options" size="medium" type="text">
          <eaIcon icon-class="close" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="closeOthersTags()">关闭其他</el-dropdown-item>
          <el-dropdown-item @click.native="closeAllTags()">关闭全部</el-dropdown-item>
          <!-- <el-dropdown-item @click="refreshSelectedTag()">刷新</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </template>
    <template v-else>
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span
              v-if="item.redirect==='noRedirect'||index==levelList.length-1"
              class="no-redirect"
            >{{ item.name }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.name}}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </template>
  </div>
</template>
<script>
import path from "path";
import pathToRegexp from 'path-to-regexp'
export default {
  name: "EaTagview",
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      this.addTags();
      this.moveToCurrentTag();
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    }
  },
  created() {
    this.getBreadcrumb();
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews;
    },
    routes() {
      return global.menu;
    }
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      
      let matched = this.$route.matched.filter(
        item => item.name
      );
      const first = matched[0];
      // if (!this.isDashboard(first)) {
      //   matched = [{ path: "/dashboard", name:"首页" }].concat(
      //     matched
      //   );
      // }

      this.levelList = matched.filter(
        item => item.name !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },

    isActive(route) {
      return route.path === this.$route.path;
    },
    filterAffixTags(routes, basePath = "/") {
      let tags = [];

      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes));
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch("tagsView/addVisitedView", tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
      }
      this.selectedTag = this.$route;
      return false;
    },
    moveToCurrentTag() {
      // const tags = this.$refs.tag;
      // this.$nextTick(() => {
      //   for (const tag of tags) {
      //     if (tag.to.path === this.$route.path) {
      //       this.$refs.scrollPane.moveToTarget(tag);
      //       // when query is different then update
      //       if (tag.to.fullPath !== this.$route.fullPath) {
      //         this.$store.dispatch("tagsView/updateVisitedView", this.$route);
      //       }
      //       break;
      //     }
      //   }
      // });
    },

    closeSelectedTag(tag) {
      let view = tag;
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    closeOthersTags() {
      let view = this.$router.currentRoute;
      this.$router.push(view);
      this.$store.dispatch("tagsView/delOthersViews", view).then(() => {
        // this.moveToCurrentTag()
      });
    },
    closeAllTags() {
      let that = this;
      this.$store.dispatch("tagsView/delAllViews").then(() => {
        that.$nextTick(() => {
          that.$router.replace({
            path: "/"
          });
        });
      });
    },
    toLastView(visitedViews) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.

        this.$router.push("/");
      }
    },
    openMenu(tag) {
      this.selectedTag = tag;
    }
  }
};
</script>
<style lang="scss" scoped>
.tagview {
  position: relative;
  padding-right: 60px;
  box-sizing: border-box;
  flex: 1;
  text-align: left;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      background: #e5e5e5;
      color: #666;
      border-radius: 5px;
      padding: 5px 10px;
      height: 80%;
      cursor: pointer;
      & + li {
        margin-left: 1px;
      }
      &.active {
        color: white;
        background: #666;
      }
    }
  }
}

.ea_header_options {
  font-size: 18px;
}
</style>