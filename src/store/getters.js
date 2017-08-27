/*
 * @Author: qipeijun 
 * @Date: 2017-08-26 15:38:20 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-26 15:55:33
 */


export const singer = state =>state.singer

export const playing = state =>state.playing

export const fullScreen = state =>state.fullScreen

export const playList = state =>state.playList

export const sequenceList = state =>state.sequenceList

export const mode = state =>state.mode

export const currentIndex = state =>state.currentIndex

export const currentSong = (state) =>{
    return state.playList[state.currentIndex] || {}
}