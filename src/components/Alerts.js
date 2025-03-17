import { Card, CardContent } from "./ui/card";
import { AlertCircle } from "lucide-react";

const Alerts = ({ alerts }) => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold">Alerts</h2>
        {alerts.length === 0 ? (
          <p>No alerts</p>
        ) : (
          alerts.map(alert => (
            <div key={alert.id} className="flex items-center gap-2 p-2 border-b">
            <AlertCircle className={`${alert.type === 'important' ? 'alert-important' : alert.type === 'warning' ? 'alert-warning' : 'alert-info'}`} />
            <lable className="alert-text">{alert.message}</lable>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Alerts;