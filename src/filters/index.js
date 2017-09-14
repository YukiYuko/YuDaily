import moment from "moment";

// 星期过滤器
const week = (date)=>['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][moment(date).format('d')];

export default {
    week
}