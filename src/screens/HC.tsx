import { useQuery } from "@tanstack/react-query";

import MainLayout from "~/components/MainLayout";
import { getData } from "~/services/mainService";

export function HC() {
  const { data } = useQuery({
    queryFn: getData,
    queryKey: ["getDeployments"],
  });

  return (
    <MainLayout>
      <div className="flex h-full flex-col">
        <div
          className="flex min-h-[234px] flex-col items-start justify-center rounded-b-[5rem] bg-gradient-to-t from-blue-100 to-blue-200 p-8 pl-12"
          style={{
            backgroundImage: "url('/images/aca.svg')",
          }}
        >
          <h1 className="text-left text-3xl font-bold">Hello, Eduardo</h1>
        </div>

        <div className="flex w-full flex-col gap-8 px-6 pt-6">
          <div className="flex flex-col gap-4 rounded-xl p-6 shadow-strong">
            <h1 className="text-center text-xl font-semibold text-gray-600">
              Daily report
            </h1>
            <div className="flex flex-col gap-4">
              {data?.map((report, i) => <p key={i}>{report.takeaway}</p>)}
              {!data?.length && (
                <p className="text-center text-gray-400">
                  Nothing to report yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
