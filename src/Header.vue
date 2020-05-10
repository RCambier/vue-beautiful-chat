<template>
  <div
    id="chat-header"
    class="sc-header"
    :style="{background: colors.header.bg, color: colors.header.text}"
  >
    <div v-if="showCloseButton" class="sc-header--close-button" @click="onClose">
      <img :src="icons.close.img" :alt="icons.close.name" />
    </div>
    <slot>
      <div class="sc-header--title-wrapper enabled" @click.stop="clickHeader">
        <avatar
          class="sc-message--avatar"
          :username="(avatar? avatar.name: '') || ''"
          :size="35"
          :src="avatar? avatar.profile_picture? avatar.profile_picture.file_url: '' :''"
        ></avatar>
        <div class="sc-header--title">{{title}}</div>
      </div>
    </slot>

    <b-popover
      target="chat-header"
      :show.sync="tutorialChatOne"
      placement="bottom"
      triggers="manual"
    >
      <template v-slot:title>Le docteur avec qui vous discutez.</template>
      Cliquez sur son nom afin d'accéder à la fiche le décrivant.
    </b-popover>
  </div>
</template>
<script>
import CloseIcon from './assets/back_button.svg'
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          close: {
            img: CloseIcon,
            name: 'default'
          }
        }
      }
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    onClose: {
      type: Function,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    },
    showCloseButton: {
      type: Boolean,
      default: false
    },
    tutorialChatOne: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clickHeader() {
      this.$emit('clickHeader')
    }
  },
  data() {
    return {
      inUserList: false
    }
  }
}
</script>
<style scoped>
.sc-header {
  min-height: 75px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
}

.sc-header--img {
  border-radius: 50%;
  align-self: center;
  padding: 10px;
}

.sc-header--avatar {
  align-self: center;
}

.sc-header--title-wrapper {
  flex: 1;
  display: flex;
  padding: 10px;
  /* padding-left: 20px; */
  user-select: none;
  align-self: center;
}

.sc-header--title {
  font-size: 20px;
  padding-left: 10px;
  align-self: center;
}

.sc-header--title-wrapper.enabled {
  cursor: pointer;
  border-radius: 5px;
}

.sc-header--title-wrapper.enabled:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button {
  width: 40px;
  align-self: center;
  height: 40px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  /* margin-left: auto; */
}

.sc-header--close-button:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button img {
  margin-left: 10px;
  margin-top: 6px;
  width: 20px;
  height: 30px;
  box-sizing: border-box;
}

@media (max-width: 450px) {
  .sc-header {
    border-radius: 0px;
  }
}
</style>
