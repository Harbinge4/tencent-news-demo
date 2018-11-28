import * as types from './mutation-types'

const actions = {
  addChannel ({commit, state}, channel, channelType) {
    commit([types.ADD_CHANNEL], channel)

    if (channelType === 'recommend') {
      let index = state.recommendChannel.indexOf(channel)
      commit([types.REMOVE_REC_CHANNEL], index)
    } else {
      let index = state.localChannel.indexOf(channel)
      commit([types.REMOVE_LOCAL_CHANNEL], index)
    }
  },
  removeChannel ({commit, state}, channel) {
    let rmIndex = state.channel.indexOf(channel)
    commit([types.REMOVE_CHANNEL], rmIndex)

    if (state.defaultLocalChannel.indexOf(channel)) {
      commit([types.ADD_LOCAL_CHANNEL], channel)
    } else {
      commit([types.ADD_REC_CHANNEL], channel)
    }
  }
}

export default actions
