import CardStats from "../Cards/CardStats";

// Icons
// import { SiChianetwork } from "react-icons/si";

export default function Header()
{
  return(
    <>
      {/* Header */}
      <div className="relative bg-sky-500 md:pt-32 pb-32 pt-32">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card Stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statCategory="Category 1"
                  statTitle="Title 1"
                  statDescription="This is a sentence"
                  // statIconName={<SiChianetwork />}
                  statIconColor="bg-green-500"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statCategory="Category 2"
                  statTitle="Title 2"
                  statDescription="This is a sentence"
                  // statIconName={<SiChianetwork />}
                  statIconColor="bg-red-500"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statCategory="Category 3"
                  statTitle="Title 3"
                  statDescription="This is a sentence"
                  // statIconName={<SiChianetwork />}
                  statIconColor="bg-blue-500"
                />
              </div>

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statCategory="Category 4"
                  statTitle="Title 4"
                  statDescription="This is a sentence"
                  // statIconName={<SiChianetwork />}
                  statIconColor="bg-yellow-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}