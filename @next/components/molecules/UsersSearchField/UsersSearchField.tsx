import React from 'react';
import { Input } from '../../atoms';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';

export default function UserSearchField() {
  return (
    <Input
      prefix={<MagnifyingGlass />}
      variant="filled"
      placeholder="Search"
      outerClassName="mr-[20px] md:w-[400px]"
      className="w-full h-10"
    />
  );
}
