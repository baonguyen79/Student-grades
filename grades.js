var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = 0; 
var gradeB = 0; 
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

for (i=0; i<scores.length; i++)
{
	if (scores[i] > 90)
	{
		gradeA++;
	}
	else if (scores[i] > 80){
		gradeB++;
	}
	else if (scores[i] > 70){
		gradeC++
	}
	else if (scores[i] > 60){
		gradeD++
	} 
	else {
		gradeF++
	}
}

console.log("Grade A: " , gradeA);
console.log("Grade B: " , gradeB);
console.log("Grade C: " , gradeC);
console.log("Grade D: " , gradeD);
console.log("Grade F: " , gradeF);

var smallNum = Math.min.apply(Math,scores);
console.log("The lowest grade: ", smallNum);

console.log("The highest grade: ", Math.max.apply(Math,scores));
