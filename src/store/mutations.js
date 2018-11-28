import * as types from './mutation-types'

const mutations = {
  [types.ADD_CHANNEL] (state, selectedChannel) {
    state.channel.push(selectedChannel)
  },
  [types.REMOVE_CHANNEL] (state, channelIndex) {
    state.channel.splice(channelIndex, 1)
  },
  [types.ADD_REC_CHANNEL] (state, selectedChannel) {
    state.recommendChannel.push(selectedChannel)
  },
  [types.REMOVE_REC_CHANNEL] (state, channelIndex) {
    state.recommendChannel.splice(channelIndex, 1)
  },
  [types.ADD_LOCAL_CHANNEL] (state, selectedChannel) {
    state.localChannel.push(selectedChannel)
  },
  [types.REMOVE_LOCAL_CHANNEL] (state, channelIndex) {
    state.localChannel.splice(channelIndex, 1)
  }
}

export default mutations
