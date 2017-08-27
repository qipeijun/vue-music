/*
 * @Author: qipeijun 
 * @Date: 2017-08-26 16:16:00 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-26 16:52:20
 */
import * as types from './mutations-types'

 export const selectPlay = function ({commit,state},{list,index}) { 
    commit(types.SET_SEQUENCE_LIST,list)
    commit(types.SET_PLSYLIST,list)
    commit(types.SET_CUEENT_INDEX,index)
    commit(types.SET_FULL_SCREEN,true)
    commit(types.SET_PLAYING_STATE,true)
  }