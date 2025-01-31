import { BatchExportConfiguration, BatchExportDestination, BatchExportRun } from '~/types'

export function intervalToFrequency(interval: BatchExportConfiguration['interval']): string {
    return {
        day: 'daily',
        hour: 'hourly',
    }[interval]
}

export function isRunInProgress(run: BatchExportRun): boolean {
    return ['Running', 'Starting'].includes(run.status)
}

export function humanizeDestination(destination: BatchExportDestination): string {
    if (destination.type === 'S3') {
        return `s3://${destination.config.bucket_name}/${destination.config.prefix}`
    }

    if (destination.type === 'Snowflake') {
        return `snowflake:${destination.config.account}:${destination.config.database}:${destination.config.table_name}`
    }

    return 'Unknown'
}
