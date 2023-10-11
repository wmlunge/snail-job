package com.aizuda.easy.retry.server.web.service;

import com.aizuda.easy.retry.server.web.model.base.PageResult;
import com.aizuda.easy.retry.server.web.model.request.JobQueryVO;
import com.aizuda.easy.retry.server.web.model.request.JobRequestVO;
import com.aizuda.easy.retry.server.web.model.response.JobResponseVO;

import java.util.List;

/**
 * @author www.byteblogs.com
 * @date 2023-10-11 22:20:23
 * @since 2.4.0
 */
public interface JobService {
    PageResult<List<JobResponseVO>> getJobPage(JobQueryVO jobQueryVO);

    PageResult<List<JobResponseVO>> getJobDetail(Long id);

    PageResult<List<JobResponseVO>> saveJob(JobRequestVO jobRequestVO);

    PageResult<List<JobResponseVO>> updateJob(JobRequestVO jobRequestVO);

}
