
//here i am using the sliding window approach : Explanation
// I am maintaining two pointers (low and high) to define the window.
// here i am expanding the high pointer to include new characters.
// with the Contract the low pointer if any character's count exceeds 2.

// Here i am using a Map to dynamically track character frequencies within the window.
// I am removing the  characters from the map when their count becomes 0 to optimize memory usage.

// Whenever a valid window is found, i am checking if its size exceeds the previously recorded maximum if it is then i am remving.

function longestSubString(s){
    // this is the low pointer
    let low = 0;
    let charCount = new Map();//here map i am using to store the frequency of characters
    let maxSubString = "";
    let maxLength = 0;
    
    for(let high = 0; high < s.length; high++){
        //here i am adding the current character to the mapor increament its count
        charCount.set(s[high], (charCount.get(s[high]) || 0) + 1);

        // Shrink the window if any character's count exceeds 2
        while ([...charCount.values()].some(count => count > 2)) {
            charCount.set(s[low], charCount.get(s[low]) - 1);
            if (charCount.get(s[low]) === 0) {
                charCount.delete(s[low]); // Remove character when count is 0
            }
            low++; // Move the left pointer
        }

        let currLength = high - low + 1;

        //here i am checking the currentLenght of the string.
        if(currLength > maxLength){
            maxLength = currLength;
            maxSubString = s.slice(low, high + 1);
        }
    }
    
    return { maxSubString, maxLength };
}

console.log(longestSubString("aaabbccddeeff"));