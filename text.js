const res = JSON.parse(
  `{ "result": "Possible hip dislocation or fracture", "detailed": "The MRI image shows abnormalities in the pelvic region, particularly around the hip joints. There appears to be a misalignment or break in the bone structure, which could indicate a hip dislocation or a fracture. These conditions often result from high-impact trauma, such as falls from significant heights or motor vehicle accidents.", "accuracy": 90, "riskFactors": [ "High-impact trauma", "Sports injuries" ], "recommendations": [ "Immediate medical evaluation and imaging to confirm the diagnosis", "Potential surgical intervention for severe dislocations or fractures", "Physical therapy and rehabilitation to aid in recovery" ] } `
);

console.log(res.accuracy);
