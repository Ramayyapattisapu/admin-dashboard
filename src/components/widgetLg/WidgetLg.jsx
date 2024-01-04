import "./widgetLg.css";

export default function WidgetLg() {

    const Button = ({type}) => {
      return <button className={"widgetLgButton " + type}>{type}</button>
    }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Statistics</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgwtLgUser">
            <img src="https://www.pexels.com/photo/man-in-black-jacket-771742" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.123</td>
          <td className="widgetLgStatus"><Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Statistics</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgwtLgUser">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeo-g.fandom.com%2Fwiki%2FBob&psig=AOvVaw3tdO3OGKeIjz_ojQCJ1dI8&ust=1704428796201000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjx7ZvywoMDFQAAAAAdAAAAABAD" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.123</td>
          <td className="widgetLgStatus"><Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Statistics</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgwtLgUser">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeo-g.fandom.com%2Fwiki%2FBob&psig=AOvVaw3tdO3OGKeIjz_ojQCJ1dI8&ust=1704428796201000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjx7ZvywoMDFQAAAAAdAAAAABAD" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.123</td>
          <td className="widgetLgStatus"><Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Statistics</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgwtLgUser">
            <img src="./src/images/profilePic.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.123</td>
          <td className="widgetLgStatus"><Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}
