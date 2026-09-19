import type { Specification } from '@/types/catalogue'

interface SpecificationTableProps {
  specifications: Specification[]
}

export function SpecificationTable({ specifications }: SpecificationTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <table className="w-full text-left text-sm">
        <tbody>
          {specifications.map((spec, index) => (
            <tr
              key={`${spec.label}-${index}`}
              className={index % 2 === 0 ? 'bg-panel/60' : 'bg-transparent'}
            >
              <th className="w-1/3 px-5 py-4 font-medium text-muted">{spec.label}</th>
              <td className="px-5 py-4 text-off-white">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
