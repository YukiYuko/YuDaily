import moment from "moment";

// 星期过滤器
const week = (date)=>['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][moment(date).format('d')];

// 图片过滤器
const attachImageUrl = (url) =>{
    if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');
    }
}

// 日期过滤器
const commonDate = (date) => moment(date).format('YYYY-MM-DD hh:ss')


export default {
    week,
    attachImageUrl,
    commonDate
}