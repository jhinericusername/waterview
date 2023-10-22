def normalize(value, min_value, max_value):
    normalized = (value - min_value) / (max_value - min_value) * 9 + 1
    return min(10, max(1, normalized))


def calculate_cwq(pH, conductivity, turbidity, temperature):
    # Normalize the individual parameters to a 1-10 scale
    pH_score = normalize(pH, 6.5, 8.5)
    conductivity_score = normalize(conductivity, 150, 500)
    turbidity_score = normalize(turbidity, 0, 5)
    temperature_score = normalize(temperature, 15, 25)
    print(pH_score, conductivity_score, turbidity_score, temperature_score)

    # Assign weights to the parameters according to their importance
    # The sum of weights should be 1
    weights = {"pH": 0.25, "conductivity": 0.25, "turbidity": 0.25, "temperature": 0.25}

    # Calculate the weighted sum
    cwq = (
        pH_score * weights["pH"]
        + conductivity_score * weights["conductivity"]
        + turbidity_score * weights["turbidity"]
        + temperature_score * weights["temperature"]
    ) * 10  # Scale to 1-100 if necessary

    return cwq


# Test the function with sample data
cwq = calculate_cwq(7, 160, 3, 20)
print(f"Comprehensive Water Quality Score: {cwq}")
