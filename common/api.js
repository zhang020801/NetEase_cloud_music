import { baseurl } from './config.js'

export function topList(){
	return new Promise(function(reslove,reject){
		uni.request({
			url: `${baseurl}/toplist/detail`,
			method:'GET',
			success: (res) => {
				let result = []
				// console.log(res)
				result = res.data.list;
				result.length = 4;
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		});
	});
}

export function list(listId){
	return uni.request({
		url:`${baseurl}/top/list?id=${listId}`,
		method:"GET"
	})
}

export function songDetail(songId){
	return uni.request({
		url:`${baseurl}/song/detail?ids=${songId}`,
		method:"GET"
	})
}

export function songSimi(songId){
	return uni.request({
		url:`${baseurl}/simi/song?id=${songId}`,
		method:"GET"
	})
}
export function songComment(songId){
	return uni.request({
		url:`${baseurl}/comment/music?id=${songId}`,
		method:"GET"
	})
}
export function songLyric(songId){
	return uni.request({
		url:`${baseurl}/lyric?id=${songId}`,
		method:"GET"
	})
}
export function songUrl(songId){
	return uni.request({
		url:`${baseurl}/song/url?id=${songId}`,
		method:"GET"
	})
}

export function searchHot(){
	return uni.request({
		url:`${baseurl}/search/hot/detail`,
		method:"GET"
	})
}
export function searchWord(word){
	return uni.request({
		url:`${baseurl}/search?keywords=${word}`, 
		method:"GET"
	})
}
export function searchSuggest(word){
	return uni.request({
		url:`${baseurl}/search/suggest?keywords=${word}&type=mobile`, 
		method:"GET"
	})
}