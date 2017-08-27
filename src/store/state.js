/*
 * @Author: qipeijun 
 * @Date: 2017-08-26 15:36:08 
 * @Last Modified by: 
 * @Last Modified time: 2017-08-26 15:58:05
 */
import {playMode} from 'common/js/config'


const state = {
	singer:{},
	playing:false,
	fullScreen:false,
	playList:[],
	sequenceList:[],
	mode:playMode.sequence,
	currentIndex:-1
}

export default state