import type { ReactNode } from "react";

export const TableItem = ({ children }: { children: ReactNode }) => (
  <td className="max-w-[100px] overflow-hidden text-ellipsis py-4 pr-2">
    {children}
  </td>
);
