import "./featuredInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4521</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3458</span>
                <span className="featuredMoneyRate">8.4 <ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4325</span>
                <span className="featuredMoneyRate">-80.4 <ArrowUpward className="featuredIcon positive"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
