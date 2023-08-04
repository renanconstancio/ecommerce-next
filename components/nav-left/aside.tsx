'use client'

import { use } from 'react'
import { getAttributes } from '@/actions/attributes'
import { useRouter } from 'next/navigation'
import { AttributeProps } from '@/types'

export default function NavLeft() {
  const route = useRouter()

  const { data: dataAttributes } = use(getAttributes())

  let uri = '/filters/'
  function handleResolve(item: AttributeProps) {
    uri = `${uri}/colors/a_a`
    route.push(uri)
  }

  return (
    <aside className="flex-initial w-60 ">
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
                    onClick={() => handleResolve(child)}
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
