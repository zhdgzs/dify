import { memo } from 'react'
import { type UnsafeUnwrappedHeaders, headers } from 'next/headers'
import Script from 'next/script'
import { IS_CE_EDITION } from '@/config'

const Zendesk = () => {
  if (IS_CE_EDITION)
    return null

  const nonce = process.env.NODE_ENV === 'production' ? (headers() as unknown as UnsafeUnwrappedHeaders).get('x-nonce') : ''

  return (
    <Script
      nonce={nonce!}
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=6d6a7cea-15e5-43a0-a9c6-54a13816ef30"
    />
  )
}

export default memo(Zendesk)
