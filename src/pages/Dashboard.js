import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import ChartCard from "../components/ChartCard";
import Alerts from "../components/Alerts";

const Dashboard = () => {
  // Mock asset data
  const assets = [
    { id: 1, name: "Server", value: 12000, purchasePrice: 15000, depreciationRate: 10, location: "Pune", maintenanceCost: 200, utilization: 80  },
    { id: 2, name: "Router", value: 20000, purchasePrice: 10000, depreciationRate: 15 , location: "Berlin", maintenanceCost: 300, utilization: 60 },
    { id: 3, name: "Fiber Cable", value: 30000, purchasePrice: 2200, depreciationRate: 8, location: "Munich", maintenanceCost: 250, utilization: 50  },
    { id: 4, name: "Switch", value: 10000, purchasePrice: 3000, depreciationRate: 12, location: "Hamburg", maintenanceCost: 100, utilization: 90  },
    { id: 5, name: "Dell PowerEdge R740", value: 15000, purchasePrice: 13000, depreciationRate: 10, location: "Pune", maintenanceCost: 200, utilization: 70   },
    { id: 6, name: "Cisco Catalyst 9300", value: 12000, purchasePrice: 10000, depreciationRate: 8, location: "Berlin", maintenanceCost: 300, utilization: 60  },
    { id: 7, name: "HP ProLiant DL380", value: 14000, purchasePrice: 15000, depreciationRate: 9, location: "Hamburg", maintenanceCost: 100, utilization: 85  },
    { id: 8, name: "IBM FlashSystem 5200", value: 18000, purchasePrice: 22000, depreciationRate: 7, location: "Frankfurt", maintenanceCost: 150, utilization: 40  },
    { id: 9, name: "MacBook Pro 16", value: 2500, purchasePrice: 10000, depreciationRate: 12, location: "Munich", maintenanceCost: 250, utilization: 50 },
    { id: 10, name: "Lenovo ThinkPad X1", value: 1800, purchasePrice: 13000, depreciationRate: 10, location: "Pune", maintenanceCost: 200, utilization: 65   },
    { id: 11, name: "Azure Virtual Machine", value: 5000, purchasePrice: 15000, depreciationRate: 15 , location: "Hamburg", maintenanceCost: 100, utilization: 90 },
    { id: 12, name: "AWS EC2 Instance", value: 4800, purchasePrice: 13000, depreciationRate: 14, location: "Frankfurt", maintenanceCost: 150, utilization: 30  }
  ];


const alerts = [
  { id: 1, type: "important", message: "Asset depreciation threshold reached for Dell PowerEdge R740" },
  { id: 2, type: "warning", message: "Asset disposal required for Cisco Catalyst 9300" },
  { id: 3, type: "info", message: "Upcoming audit scheduled for HP ProLiant DL380" },
  { id: 4, type: "important", message: "Lease contract expiring soon for MacBook Pro M1" },
  { id: 5, type: "warning", message: "Maintenance overdue for Dell Latitude 5520" },
  { id: 6, type: "info", message: "Asset transfer initiated for HP ProLiant DL380" },
  { id: 7, type: "important", message: "Depreciation recalculation required for Cisco Catalyst 9300" },
  { id: 8, type: "warning", message: "Asset revaluation needed for Dell PowerEdge R740" },
  { id: 9, type: "info", message: "Impairment check scheduled for MacBook Pro M1" },
  { id: 10, type: "important", message: "Unexpected asset loss reported for Dell Latitude 5520" }
];
  
const mockMovements = [
  { id: 1, asset: "Cisco Catalyst 9300", from: "Frankfurt", to: "Stuttgart", date: "2024-02-15" },
  { id: 2, asset: "HP ProLiant DL380", from: "Berlin", to: "Hamburg", date: "2024-03-01" },
  { id: 3, asset: "MacBook Pro 16", from: "Cologne", to: "Stuttgart", date: "2024-02-15" },
  { id: 4, asset: "Dell PowerEdge R740", from: "Munich", to: "Hamburg", date: "2024-03-01" },
  { id: 5, asset: "Router X123", from: "Frankfurt", to: "Cologne", date: "2024-02-15" },
  { id: 6, asset: "IBM FlashSystem 5200", from: "Berlin", to: "Frankfurt", date: "2024-03-01" }
];

  const depreciationData = assets.map(asset => ({
    name: asset.name,
    depreciation: asset.depreciationRate
  }));

  const assetDistribution = assets.map(asset => ({
    name: asset.name,
    value: asset.value
  }));

  const assetValueTrends = assets.map(asset => ({
    name: asset.name,
    value: asset.value * (1 - asset.depreciationRate / 100) ** 5 // Approximate trend over 5 years
  }));

  const roiData = assets.map(asset => ({
    name: asset.name,
    roi: ((asset.value - asset.purchasePrice) / asset.purchasePrice) * 100
  }));

  const highMaintenanceAlerts = assets
    .filter(asset => asset.maintenanceCost > 250)
    .map(asset => `High maintenance cost for ${asset.name} at ${asset.location}`);

  const underutilizedAlerts = assets
    .filter(asset => asset.utilization < 50)
    .map(asset => `Underutilized asset: ${asset.name} at ${asset.location}`);

  const totalDepreciation = assets.reduce((sum, a) => sum + (a.purchasePrice - a.value), 0);
  const totalRemainingValue = assets.reduce((sum, a) => sum + a.value, 0);
  
  console.log(roiData);
  console.log(assets);

  return (
    <div >
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-bold">Financial Impact</h2>
            <p>Total Assets: {assets.length}</p>
            <p>Total Value: ${assets.reduce((sum, a) => sum + a.value, 0).toFixed(2)}</p>
            <p>Total Depreciation: ${totalDepreciation.toFixed(2)}</p>
            <p>Remaining Asset Value: ${totalRemainingValue.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Alerts</h2>
          {[...highMaintenanceAlerts, ...underutilizedAlerts].map((alert, index) => (
            <p key={index}><AlertCircle className="inline mr-2 text-red-500" /> {alert}</p>
          ))}
        </CardContent>
      </Card>
        <ChartCard title="Depreciation Trends" type="bar" data={depreciationData} dataKey="depreciation" />
        <ChartCard title="Asset Distribution" type="pie" data={assetDistribution} dataKey="value" />
        <ChartCard title="Asset Value Trends (5 Years)" type="line" data={assetValueTrends} dataKey="value" />
        <ChartCard title="Return on Investment (ROI)" type="bar" data={roiData} dataKey="roi" />     
        <Card>
        <CardContent>
          <h2 className="text-xl font-bold">Asset Movements</h2>
          {mockMovements.length === 0 ? <p>No movements recorded</p> : (
            <ul>
              {mockMovements.map(move => (
                <li key={move.id}>{move.asset} moved from {move.from} to {move.to} on {move.date}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      </div>
      <div>
        <Alerts alerts={alerts} />
      </div>
    </div>
  );
};

export default Dashboard;
