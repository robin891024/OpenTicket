import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function EventCard({ image, title, date, price }) {
  return (
    <Card className="bg-bg shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-text">{title}</h3>
        <p className="text-accent">{date}</p>
        <p className="text-accent font-bold">From {price}</p>
      </CardContent>
    </Card>
  );
}

export default EventCard;