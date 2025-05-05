import { Table, Empty } from "antd"

// import { brews } from "./brews"
import { STATUSES } from "./statuses"
import { useEffect, useState } from "react"
import { db } from "./firebase"
import { getDocs, collection } from "firebase/firestore"

export const BrewMenu = () => {
  const [brews, setBrews] = useState([])

  useEffect(() => {
    const fetchBrews = async () => {
      const querySnapshot = await getDocs(collection(db, "brew-master"))
      const brews = []

      querySnapshot.forEach((doc) =>
        brews.push({ ...doc.data(), id: doc.id, key: doc.id })
      )

      setBrews(brews)
    }

    fetchBrews()
  }, [])

  if (brews.length === 0) return <p>Loading...</p>
  return (
    <>
      <Table
        className="mb-4"
        columns={columns.map((col, i) =>
          i === 2 ? { ...col, title: "Release" } : col
        )}
        dataSource={brews
          .filter((brew) =>
            [STATUSES.KEGGED, STATUSES.BREWING].includes(brew.status)
          )
          .sort((a, b) => {
            if (a.status === STATUSES.KEGGED && b.status !== STATUSES.KEGGED)
              return -1
            if (a.status !== STATUSES.KEGGED && b.status === STATUSES.KEGGED)
              return 1
            return a.estimated_release - b.estimated_release
          })}
        expandable={{
          expandRowByClick: true,
          expandedRowRender: (record) => (
            <div className="flex justify-between gap-4 sm:flex-row flex-col">
              <p
                style={{
                  margin: "0 0 0 36px",
                  maxWidth: "768px",
                  width: "75%",
                }}
              >
                <em>{record.description}</em>
                <br />
              </p>
              <div className="flex sm:align-center flex-col justify-between mr-[36px] max-w-[100%] sm:max-w-[25%] w-full">
                <p className="text-center sm:text-left text-md font-bold">
                  {record.available_count} servings available at{" "}
                  {record.estimated_abv} ABV.
                </p>
                <br />
                <p className="text-center sm:text-left text-md font-bold">
                  Brewed by: {record.brewed_by}
                </p>
              </div>
            </div>
          ),
          fixed: "right",
        }}
        locale={{
          emptyText: (
            <Empty
              description="Nothing on tap"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        pagination={false}
        size="small"
        title={() => <h2 className="text-lg font-bold">Kegged and Brewing</h2>}
      />
      <Table
        className="mb-4"
        columns={columns}
        dataSource={brews
          .filter((brew) =>
            [STATUSES.CONCEPT, STATUSES.PLANNING].includes(brew.status)
          )
          .sort((a, b) => {
            if (
              a.status === STATUSES.PLANNING &&
              b.status !== STATUSES.PLANNING
            )
              return -1
            if (
              a.status !== STATUSES.PLANNING &&
              b.status === STATUSES.PLANNING
            )
              return 1
            return a.estimated_release - b.estimated_release
          })}
        expandable={{
          expandRowByClick: true,
          expandedRowRender: (record) => (
            <div className="flex justify-between gap-4 sm:flex-row flex-col">
              <p
                style={{
                  margin: "0 0 0 36px",
                  maxWidth: "768px",
                  width: "75%",
                }}
              >
                <em>{record.description}</em>
                <br />
              </p>
              <div className="flex sm:align-center flex-col justify-between mr-[36px] max-w-[100%] sm:max-w-[25%] w-full">
                <p className="text-center sm:text-left text-md font-bold">
                  {record.available_count} servings available at{" "}
                  {record.estimated_abv} ABV.
                </p>
                <br />
                <p className="text-center sm:text-left text-md font-bold">
                  Brewed by: {record.brewed_by}
                </p>
              </div>
            </div>
          ),
          fixed: "right",
        }}
        locale={{
          emptyText: (
            <Empty
              description="No upcoming brews"
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
        pagination={false}
        size="small"
        title={() => <h2 className="text-lg font-bold">Upcoming</h2>}
      />
      <Table
        className="mb-4 pb-8"
        columns={columns.map((col, i) =>
          i === 2 ? { ...col, title: "Release" } : col
        )}
        dataSource={brews.filter((brew) => brew.status === STATUSES.GONE)}
        expandable={{
          expandRowByClick: true,
          expandedRowRender: (record) => (
            <div className="flex justify-between gap-4 sm:flex-row flex-col">
              <p
                style={{
                  margin: "0 0 0 36px",
                  maxWidth: "768px",
                  width: "75%",
                }}
              >
                <em>{record.description}</em>
                <br />
              </p>
              <div className="flex sm:align-center flex-col justify-between mr-[36px] max-w-[100%] sm:max-w-[25%] w-full">
                <p className="text-center sm:text-left text-md font-bold">
                  {record.available_count} servings available at{" "}
                  {record.estimated_abv} ABV.
                </p>
                <br />
                <p className="text-center sm:text-left text-md font-bold">
                  Brewed by: {record.brewed_by}
                </p>
              </div>
            </div>
          ),
          fixed: "right",
        }}
        pagination={false}
        size="small"
        title={() => <h2 className="text-lg font-bold">Missed Out</h2>}
      />
    </>
  )
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <p
        className={`text-[0.8rem] md:text-[1rem] font-bold`}
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage: `linear-gradient(to right, ${record.colors[0]}, ${record.colors[1]})`,
        }}
      >
        {text.toUpperCase()}
      </p>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    defaultSortOrder: "ascend",
    render: (status) => (
      <p className="text-[0.8rem] md:text-[0.9rem] font-bold">{status}</p>
    ),
    sorter: {
      compare: (a, b) => {
        if (a.status === "GONE") return 1
        if (b.status === "GONE") return -1
        // return a.status.localeCompare(b.status)
      },
      multiple: 1,
    },
  },
  {
    title: "Est Release",
    dataIndex: "estimated_release",
    key: "estimated_release",
    defaultSortOrder: "ascend",
    render: (date) => date?.toDate().toLocaleDateString(),
    sorter: {
      compare: (a, b) => a.estimated_release - b.estimated_release,
      multiplyer: 2,
    },
  },
  // {
  //   title: "Est ABV",
  //   dataIndex: "estimated_abv",
  //   key: "estimated_abv",
  //   render: (abv) => <p className="italic">{abv}</p>,
  // },
  {
    title: "Brewed By",
    dataIndex: "brewed_by",
    key: "brewed_by",
    render: (brewedBy) => <p className="italic">{brewedBy}</p>,
    responsive: ["sm"],
  },
  // {
  //   title: "Available Count",
  //   dataIndex: "available_count",
  //   key: "available_count",
  //   render: (availableCount) => <p className="font-bold">{availableCount}</p>,
  //   responsive: ["md"],
  // },
  // {
  //   title: "Description",
  //   dataIndex: "description",
  //   key: "description",
  //   // responsive: ["lg"],
  // },
]
