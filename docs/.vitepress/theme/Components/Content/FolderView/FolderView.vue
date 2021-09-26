<template>
  <FolderViewChild :depth="-1" :name="'.'" :nodes="getData()">
  </FolderViewChild>
</template>

<script lang="js">
import FolderViewChild from './FolderViewChild.vue'

export default {
  name: 'FolderView',
  props: {
    paths: {
      default: () => [],
    }
  },
  components: {
    FolderViewChild
  },
  methods: {
    fillDict(data, path) {
      let first = path.shift();

      // Create if needed
      if (!(first in data)) {
        data[first] = {
          name: first,
          children: {},
        };
      }

      // If there are more paths, recurse
      if (path.length > 0) {
        this.fillDict(data[first]['children'], path);
      }
    },
    getData() {
      let data = {
        name: 'root',
        children: {},
      };

      this.paths.forEach(path => {
        path = path.split('/')
        this.fillDict(data['children'], path)
      });

      return data;
    }
  },
};
</script>
