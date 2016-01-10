/*
    Author : Rohit Sukumar
    email  : rohi3t@gmail.com 
    Description: The function uses haversine formula to calulate the  great-circle distances between two points on a sphere from their longitudes and latitudes.
    
    (This function only works on WGS 84 Projection)

    input startPoint : {x:latitude, y:longitude}
    Input endPoint   : {x:latitude, y:longitude}

    example: 
        var distance = MeasureDistance({x:23.358388972416385,y:77.38100009397795}; var end = {x:23.358388972416385, y:77.69672634719053});
        console.log(distance + 'meters');
        
        output:
            32229.8672449393 meters
*/

function MeasureDistance(startPoint, endPoint)
{
    var lat1 = startPoint.x;
    var lat2 = endPoint.x;

    var lon1 = startPoint.y;
    var lon2 = endPoint.y;

    var Rlat1 = lat1* Math.PI/180;
    var Rlat2 = lat2* Math.PI/180;

    var difflat = (lat2-lat1) * Math.PI/180;
    var difflon = (lon2-lon1) * Math.PI/180;

    var a = Math.sin(difflat/2) * Math.sin(difflon/2) + Math.cos(Rlat1) * Math.cos(Rlat2) * Math.sin(difflon/2) * Math.sin(difflon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var earthRadius = 6371000; //meters

    var distance = earthRadius * c;

    return distance; // in meters
}