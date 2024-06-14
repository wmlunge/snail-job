package com.aizuda.snailjob.client.job.core.executor;

import com.aizuda.snailjob.client.job.core.dto.MapArgs;
import com.aizuda.snailjob.client.model.ExecuteResult;
import com.aizuda.snailjob.common.core.model.JobContext;

import java.util.List;

/**
 * @author zhengweilin
 * @version 1.0.0
 * @date 2024/06/12
 */
public abstract class AbstractMapReduceExecutor extends AbstractMapExecutor {

    protected abstract ExecuteResult doReduceExecute(JobContext jobContext, List<MapArgs> mapArgsList);
}
