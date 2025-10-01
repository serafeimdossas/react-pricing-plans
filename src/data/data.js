export const plans = {
  no_plan: {
    real_time_care: {
      instant_chat: false,
      five_euro_off: false,
      quick_access_to_info: false,
    },
    mental_healt_support: {
      free_first_session: false,
      twenty_off_follow_up_sessions: false,
      switch_specialist_option: false,
      smart_matching_tool: true,
      mental_health_assessments: true,
    },
    exclusive_perks: {
      free_dental_check_up: false,
      special_dental_physio_prices: false,
      simple_visits_low_rates: false,
    },
  },
  monthly_plan: {
    real_time_care: {
      instant_chat: true,
      five_euro_off: true,
      quick_access_to_info: true,
    },
    mental_healt_support: {
      free_first_session: true,
      twenty_off_follow_up_sessions: true,
      switch_specialist_option: true,
      smart_matching_tool: true,
      mental_health_assessments: true,
    },
    exclusive_perks: {
      free_dental_check_up: true,
      special_dental_physio_prices: true,
      simple_visits_low_rates: true,
    },
  },
  yearly_plan: {
    real_time_care: {
      instant_chat: true,
      five_euro_off: true,
      quick_access_to_info: true,
    },
    mental_healt_support: {
      free_first_session: true,
      twenty_off_follow_up_sessions: true,
      switch_specialist_option: true,
      smart_matching_tool: true,
      mental_health_assessments: true,
    },
    exclusive_perks: {
      free_dental_check_up: true,
      special_dental_physio_prices: true,
      simple_visits_low_rates: true,
    },
  },
};

export const plans_labels = {
  no_plan: "Without DO+",
  monthly_plan: "Monthly Plan",
  yearly_plan: "Annual Plan",
};

export const plans_keys = ["no_plan", "monthly_plan", "yearly_plan"];

export const features_labels = {
  real_time_care: {
    label: "Accessible, real time care",
    features: {
      instant_chat: "Instant chat with doctors, 365 days a year",
      five_euro_off: "5€ off instant video consultations with 17+ specialties",
      quick_access_to_info:
        "Quick access to sick notes, prescriptions, and second opinions",
    },
  },
  mental_healt_support: {
    label: "Mental health support",
    features: {
      free_first_session: "Free first session with mental health specialists",
      twenty_off_follow_up_sessions: "20% off follow-up sessions",
      switch_specialist_option:
        "Option to switch specialists until you find the right fit",
      smart_matching_tool: "Smart matching tool",
      mental_health_assessments: "Mental health assessments",
    },
  },
  exclusive_perks: {
    label: "Exclusive perks",
    features: {
      free_dental_check_up: "Free dental check-up",
      special_dental_physio_prices:
        "Special prices for cleanings, fillings, and physiotherapy",
      simple_visits_low_rates:
        "Lower rates for simple visits and follow-ups across specialties",
    },
  },
};

export const page_title = {
  title: "What you get with DO+",
  subtitle:
    "Try DO+ free for 24 hours, whether you choose monthly or annual. Cancel anytime.",
};
