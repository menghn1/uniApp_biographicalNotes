import https from './interface'

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * handle [boolean] 如果需要自己处理 catch 请求 ，传入 true ，交给接口统一处理 ，请传如 false或不传
 */

// 获取用户信息
export const banner = (data) => {
    return https({
        url: 'self_info',
        method: 'POST', 
        data,
		// handle:true //自己处理catch错误返回
    })
}
//添加用户记录
export const record_add = (data) => {
    return https({
        url: 'record_add',
        method: 'POST', 
        data,
		// handle:true //自己处理catch错误返回
    })
}
//查询工作经历
export const work_list = (data) => {
    return https({
        url: 'work_list',
        method: 'POST', 
        data,
		// handle:true //自己处理catch错误返回
    })
}
//查询项目列表
export const project_list = (data) => {
    return https({
        url: 'project_list',
        method: 'POST', 
        data,
		// handle:true //自己处理catch错误返回
    })
}
//查询职业技能
export const skill_list = (data) => {
    return https({
        url: 'skill_list',
        method: 'POST', 
        data,
		// handle:true //自己处理catch错误返回
    })
}
//查询访问列表
export const record_list = (data) => {
    return https({
        url: 'record_list',
        method: 'POST', 
        data,
		// handle:true //自己处理catch错误返回
    })
}

// 默认全部导出
export default {
    banner,
	record_add,
	work_list,
	project_list,
	skill_list,
	record_list
}