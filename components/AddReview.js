import React, { useState, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const AddReview = ({ navigation: { navigate } }) => {
  const [review, setReview] = React.useState({
    name: '',
    rating: 0,
    comment: '',
    submitting: false,
  });

  const submitReview = () => {
    setReview({ ...review, submitting: true });
    setTimeout(() => navigate('COURSES_LIST'), 3000);
  };

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.root}>
        <Text style={styles.addReview}>Add Review</Text>
        <TextInput
          placeholder="Name (Optional)"
          value={review.name}
          onChangeText={(name) => setReview({ ...review, name })}
          style={styles.input}
        />
        <Text style={styles.rating}>Your Rating</Text>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <TouchableOpacity
                onPress={() => setReview({ ...review, rating: i })}
                style={styles.starButton}
                key={i}
              >
                <Icon
                  name="star"
                  size={40}
                  color={i <= review.rating ? '#FFD64C' : '#CCCCCC'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          placeholder="Review"
          value={review.comment}
          onChangeText={(comment) => setReview({ ...review, comment })}
          style={[styles.input, { height: 100 }]}
          multiline={true}
          numberOfLines={6}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitReview}
          disabled={review.submitting}
        >
          <Text style={styles.submitButtonText}>Submit Review</Text>
        </TouchableOpacity>
        {review.submitting && (
          <ActivityIndicator
            size="large"
            color="#0066CC"
            style={{ padding: 10 }}
          />
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default AddReview;
