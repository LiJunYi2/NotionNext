import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className || ''}`}>
      <span>All Sites</span>
      <a
        href='https://status.bilivo.top/'
        className='underline justify-start'>
        Site Status
      </a>
      .
    </div>
  )
}
