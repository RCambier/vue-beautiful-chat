<template>
  <div class="sc-message--file" :style="messageColors">
    <div class="sc-message--file-icon">
      <img :src="data.file.url" class="sc-image" />
    </div>
    <div class="sc-message--file-text" v-if="messageText" :style="messageColors">
      {{messageText}}
      <p v-if="data.meta" class="sc-message--meta" :style="messageColors">{{data.meta}}</p>
    </div>
  </div>
</template>

<script>
import escapeGoat from 'escape-goat'
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  },
  computed: {
    messageText() {
      if (this.data.text) {
        var escaped = escapeGoat.escape(this.data.text)
        escaped = escaped.replace(/^\s*/, '').replace(/\s*$/, '')
        return escaped
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.sc-message--file {
  max-width: min(300px, 70%);
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  /* white-space: pre-wrap; */
  -webkit-font-smoothing: subpixel-antialiased;
}

.sc-message--content.sent .sc-message--file {
  word-wrap: break-word;
}

.sc-message--file-icon {
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
}

.sc-image {
  border-radius: 6px;
  max-width: 100%;
  min-width: 100%;
}

.sc-message--file-text {
  padding: 0px 17px;
  text-align: right;
  border-radius: 6px;
  white-space: pre-wrap;
  -webkit-font-smoothing: antialiased;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  white-space: pre-wrap;
}

.sc-message--file-name {
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  font-size: x-small;
  text-align: center;
}

.sc-message--file-name a {
  text-decoration: none;
  color: #ece7e7;
}

.sc-message--file-name a:hover {
  color: white;
}

.sc-message--content.sent .sc-message--file-text {
  color: white;
  background-color: #4e8cff;
  word-wrap: break-word;
}

.sc-message--content.received .sc-message--file {
  color: #263238;
  background-color: #f4f7f9;
  margin-right: 40px;
}

.sc-message--content.received .sc-message--file-name {
  color: #000;
}

.sc-message--content.received .sc-message--file a {
  color: rgba(43, 40, 40, 0.7);
}

.sc-message--content.received .sc-message--file a:hover {
  color: #0c0c0c;
}
</style>
