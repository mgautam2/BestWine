import json

with open('white_wine_data.txt') as f:
    data = json.load(f)

all_activities = []
for i in range(len(data)):
    iActivities = data[i]['activites']
    # if 'steamed mussels' in iActivities:
    #     print data[i]
    for elem in iActivities:
        if elem not in all_activities:
            all_activities.append(elem)

print(len(all_activities))
