import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem: React.FC<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}: {data.name}
  </Link>
)

export default ListItem
