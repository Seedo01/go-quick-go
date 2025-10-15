export interface VerificationResult {
  success: boolean;
  message: string;
  data?: any;
}

export interface BVNVerificationData {
  bvn: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  phone?: string;
}

export interface NINVerificationData {
  nin: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
}

export interface FarmMappingData {
  farmMappingId: string;
  farmerName?: string;
  location?: string;
}

export const verificationService = {
  async verifyBVN(data: BVNVerificationData): Promise<VerificationResult> {
    try {
      const response = await fetch('https://api.cbn.gov.ng/bvn/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_CBN_API_KEY || ''}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        return {
          success: false,
          message: 'BVN verification failed. Please check your details.'
        };
      }

      const result = await response.json();
      return {
        success: true,
        message: 'BVN verified successfully',
        data: result
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to verify BVN at this time. Please try again later.'
      };
    }
  },

  async verifyNIN(data: NINVerificationData): Promise<VerificationResult> {
    try {
      const response = await fetch('https://api.nimc.gov.ng/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_NIMC_API_KEY || ''}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        return {
          success: false,
          message: 'NIN verification failed. Please check your details.'
        };
      }

      const result = await response.json();
      return {
        success: true,
        message: 'NIN verified successfully',
        data: result
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to verify NIN at this time. Please try again later.'
      };
    }
  },

  async verifyFarmMapping(data: FarmMappingData): Promise<VerificationResult> {
    try {
      const response = await fetch('https://api.ncr.gov.ng/farm/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_NCR_API_KEY || ''}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        return {
          success: false,
          message: 'Farm mapping verification failed. Please check your details.'
        };
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Farm mapping verified successfully',
        data: result
      };
    } catch (error) {
      return {
        success: false,
        message: 'Unable to verify farm mapping at this time. Please try again later.'
      };
    }
  },

  validateBVN(bvn: string): boolean {
    return /^\d{11}$/.test(bvn);
  },

  validateNIN(nin: string): boolean {
    return /^\d{11}$/.test(nin);
  },

  validateNigerianPhone(phone: string): boolean {
    return /^(\+234|0)[789]\d{9}$/.test(phone.replace(/\s/g, ''));
  }
};
