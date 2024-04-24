
echo "start"
# 函数 检查一个数字是否为素数
is_prime() {
	local num=$1 

	if [ $num -lt 2 ]; then
		return 1

	for ((i=2; i*i<=num; i++)); do
		if [ $((num % i)) -eq 0 ]; then
			return 1
		fi
	done 
	return 0
}

read 'number?one number : '

if is_prime $number; then
	echo "the number $number is prime"
else 
	echo "the number $number is not prime"
fi 
