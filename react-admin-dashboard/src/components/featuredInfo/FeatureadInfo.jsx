import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.css'

export default function FeatureadInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 530 000 00 DZD  </span>
                    <span className="featuredMoneyRate">
                        - 5.32 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last week 
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 75 000  DZD  </span>
                    <span className="featuredMoneyRate">
                        + 15 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last day 
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 68 600 DZD  </span>
                    <span className="featuredMoneyRate">
                        - 9.02 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month 
                </span>
            </div>

        </div>
    )
}
