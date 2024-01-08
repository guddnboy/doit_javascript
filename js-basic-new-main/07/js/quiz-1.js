		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);


		function showArray(arr) {
			var str = "<table><tr>";
			var sum = 0;
			for (var i=0; i<arr.length; i++) {
				sum += numbers[i];
				str += "<td>" + arr[i] + "</td>";
			}
			
			arr.push(sum);
			str += "<td>" + arr[i] + "</td>";
			str += "</tr></table>";
			document.write(str);
		}