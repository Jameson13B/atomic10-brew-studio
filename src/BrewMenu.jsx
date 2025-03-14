import { Table } from "antd"

import { brews } from "./brews"

export const BrewMenu = () => <Table columns={columns} dataSource={brews} />

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <p
        className={`text-[1rem] font-bold bg-gradient-to-r ${record.colors[0]} ${record.colors[1]}`}
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
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
    render: (status) => <p className="font-bold">{status}</p>,
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
    title: "Estimated Release",
    dataIndex: "estimated_release",
    key: "estimated_release",
    defaultSortOrder: "ascend",
    render: (date) => date.toLocaleDateString(),
    sorter: {
      compare: (a, b) => a.estimated_release - b.estimated_release,
      multiplyer: 2,
    },
  },
  {
    title: "Estimated ABV",
    dataIndex: "estimated_abv",
    key: "estimated_abv",
    render: (abv) => <p className="italic">{abv}</p>,
    responsive: ["md"],
  },
  {
    title: "Brewed By",
    dataIndex: "brewed_by",
    key: "brewed_by",
    render: (brewedBy) => <p className="italic">{brewedBy}</p>,
    responsive: ["md"],
  },
  {
    title: "Available Count",
    dataIndex: "available_count",
    key: "available_count",
    render: (availableCount) => <p className="font-bold">{availableCount}</p>,
    responsive: ["md"],
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    responsive: ["lg"],
  },
]
