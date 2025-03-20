const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

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

  const movements = [
    { id: 1, asset: "Cisco Catalyst 9300", from: "Berlin", to: "Hamburg", date: "2024-02-15" },
    { id: 2, asset: "HP ProLiant DL380", from: "Munich", to: "Berlin", date: "2024-03-01" }
  ];
  
  
// API route
app.get("/api/assets", (req, res) => {
  res.contentType('application/json').json(assets);
});

app.get("/api/alerts", (req, res) => {
    res.contentType('application/json').json(alerts);
  });

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
