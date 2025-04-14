import { Table, Empty } from "antd"

import { brews } from "./brews"
import { STATUSES } from "./statuses"

export const BrewMenu = () => (
  <>
    <Table
      className="mb-4"
      columns={columns}
      dataSource={brews.filter((brew) =>
        [STATUSES.CONCEPT, STATUSES.PLANNING, STATUSES.BREWING].includes(
          brew.status
        )
      )}
      expandable={{
        expandRowByClick: true,
        expandedRowRender: (record) => (
          <>
            <p style={{ margin: "0 0 0 36px", maxWidth: "768px" }}>
              <em>{record.description}</em>
              <br />
              <br />
            </p>
            <p className="text-center sm:text-left text-md font-bold sm:ml-[65px] mb-4">
              Brewed by: {record.brewed_by}
            </p>
            <p className="text-center sm:text-left text-md font-bold sm:ml-[65px] mb-4">
              {record.available_count} pints available at {record.estimated_abv}{" "}
              ABV.
            </p>
          </>
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
      className="mb-4"
      columns={columns.map((col, i) =>
        i === 2 ? { ...col, title: "Release" } : col
      )}
      dataSource={brews.filter((brew) => brew.status === STATUSES.KEGGED)}
      expandable={{
        expandRowByClick: true,
        expandedRowRender: (record) => (
          <p style={{ margin: "0 0 0 48px", maxWidth: "768px" }}>
            <em>{record.description}</em>
          </p>
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
      title={() => <h2 className="text-lg font-bold">On Tap</h2>}
    />
    <Table
      className="mb-4"
      columns={columns.map((col, i) =>
        i === 2 ? { ...col, title: "Release" } : col
      )}
      dataSource={brews.filter((brew) => brew.status === STATUSES.GONE)}
      expandable={{
        expandRowByClick: true,
        expandedRowRender: (record) => (
          <p style={{ margin: "0 0 0 48px", maxWidth: "768px" }}>
            <em>{record.description}</em>
          </p>
        ),
        fixed: "right",
      }}
      pagination={false}
      size="small"
      title={() => <h2 className="text-lg font-bold">Missed Out</h2>}
    />
  </>
)

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <p
        className={`text-[0.8rem] md:text-[1rem] font-bold bg-gradient-to-r ${record.colors[0]} ${record.colors[1]}`}
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
    render: (date) => date.toLocaleDateString(),
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
