import { columns, Hris } from "./columns";
import { DataTable } from "./data-table";

import hris from "./hris.json";

type HrisResponse = {
  data: Hris[];
};

async function getData(): Promise<Hris[]> {
  const res = hris as HrisResponse;
  return res.data;
}

export default async function Pegawai() {
    const data = await getData();
    return (

<div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-2">
          
          <div className="px-4 lg:px-6 text-sm ">
            <DataTable columns={columns} data={data} />
          </div>
          
        </div>
      </div>
    </div>
  )
}