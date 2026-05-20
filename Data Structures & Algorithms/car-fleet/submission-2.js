class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let carTimearr=[]
        let count=0
        for(let i=0;i<position.length;i++){
            const time=(target-position[i])/speed[i]
            carTimearr.push([position[i],time])
        }
        carTimearr.sort((a,b)=>b[0]-a[0])
        let prevTime=0
        for(let i=0;i<carTimearr.length;i++){
           if(carTimearr[i][1]>prevTime){
            count++
            prevTime=carTimearr[i][1]
           }
        }
        return count
    }
}
