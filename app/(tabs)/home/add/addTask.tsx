import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";

const AddTaskForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
    priority: "",
    tags: "",
    schedule: {
      frequency: "",
      interval: 1,
      daysOfWeek: "",
      dayOfMonth: "",
      customPattern: "",
      startTime: "",
      endTime: "",
    },
  });

  const handleChange = (field, value, isScheduleField = false) => {
    if (isScheduleField) {
      setTaskData((prev) => ({
        ...prev,
        schedule: { ...prev.schedule, [field]: value },
      }));
    } else {
      setTaskData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = () => {
    console.log("Submitting task:", taskData);
    alert("Task Submitted! Check console for data.");
  };

  return (
    <ScrollView style={styles.container}>
      {currentPage === 1 && (
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={taskData.title}
            onChangeText={(value) => handleChange("title", value)}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter description"
            multiline={true}
            numberOfLines={4}
            value={taskData.description}
            onChangeText={(value) => handleChange("description", value)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCurrentPage(2)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentPage === 2 && (
        <View>
          <Text style={styles.label}>Due Date</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={taskData.dueDate}
            onChangeText={(value) => handleChange("dueDate", value)}
          />
          <Text style={styles.label}>Status</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter status"
            value={taskData.status}
            onChangeText={(value) => handleChange("status", value)}
          />
          <Text style={styles.label}>Priority</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter priority"
            value={taskData.priority}
            onChangeText={(value) => handleChange("priority", value)}
          />
          <Text style={styles.label}>Tags (comma separated)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., urgent, home"
            value={taskData.tags}
            onChangeText={(value) => handleChange("tags", value)}
          />
          {/* More fields for 'schedule' can be added here following the same pattern */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCurrentPage(1)}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#008080",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: "#008080",
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#008080",
  },
  button: {
    backgroundColor: "#008080",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default AddTaskForm;
