'use client'

import { use } from 'react'
import { getAttributes } from '@/actions/attributes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { encode } from '@/utils/base64'

export default function NavLeft() {
  const route = useRouter()
  const pathName = usePathname()

  const { data: dataAttributes } = use(getAttributes())

  let uri = '/search/'

  // const arrUri: string[] = []
  let arrSearch: { [x: string]: string[] } = {}

  function handleResolve({ type, id }: { type: string; id: string }) {
    const isSearch =
      arrSearch?.[type] && arrSearch?.[type].find((item) => item === id)
    if (isSearch) {
      arrSearch[type] = arrSearch[type].filter((item) => item !== id)
    } else {
      arrSearch = { ...arrSearch, [type]: [id] }
    }

    // const buff = `${type}=${JSON.stringify(arrSearch)}`
    // const isUri = arrUri.find((item) => item === buff)
    // if (isUri) {
    //   arrUri = arrUri.filter((item) => item !== buff)
    // } else {
    //   arrUri.push(buff)
    // }

    // const buff = encode(`${type}=${JSON.stringify(arrSearch)}`)
    uri = `?filter_search=${JSON.stringify(arrSearch)}`

    console.log(uri)
    // route.push(uri)
  }

  return (
    <aside className="flex-initial w-60">
      <ol className="space-y-8 border border-gray-200 rounded-lg shadow-md p-4">
        {dataAttributes.map((item) => (
          <dd key={item.id} className="pb-4">
            <strong className="border-b border-b-gray-200 block mb-2 pb-1">
              {item.name}
            </strong>

            {item.childrens && item.type === 'COLOR' && (
              <ol className="flex flex-row space-x-1 p-4">
                {item.childrens.map((child) => (
                  <li
                    key={child.id}
                    className="relative rounded-sm w-5 h-5 overflow-hidden text-[0px] cursor-pointer"
                    style={{
                      backgroundColor: child.palette[0],
                    }}
                    onClick={() =>
                      handleResolve({ type: item.type, id: child.name })
                    }
                  >
                    <span
                      style={{
                        position: 'absolute',
                        zIndex: '1',
                        width: '0',
                        height: '0',
                        fontSize: '0',
                        overflow: 'hidden',
                        borderBottom: '1.25rem solid transparent',
                        borderLeft: '1.25rem solid transparent',
                        borderBottomColor: child.palette[1],
                      }}
                    />
                    {child.name}
                  </li>
                ))}
              </ol>
            )}

            {item.childrens && item.type === 'SIZE' && (
              <ol className="flex flex-row space-x-1 p-4">
                {item.childrens.map((child) => (
                  <li
                    key={child.id}
                    className="relative rounded-sm px-2 bg-slate-200 hover:bg-slate-300 cursor-pointer"
                  >
                    {child.name}
                  </li>
                ))}
              </ol>
            )}

            {item.childrens &&
              (item.type === 'BRAND' ||
                item.type === 'FLAVOR' ||
                item.type === 'ESPECIFICATION') && (
                <ol className="flex flex-col space-y-1 p-4">
                  {item.childrens.map((child) => (
                    <li
                      key={child.id}
                      className="relative rounded-sm px-2 hover:underline cursor-pointer"
                      onClick={() =>
                        handleResolve({ type: item.type, id: child.name })
                      }
                    >
                      {child.name}
                    </li>
                  ))}
                </ol>
              )}
          </dd>
        ))}
      </ol>
    </aside>
  )
}
