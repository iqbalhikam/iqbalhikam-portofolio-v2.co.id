// global.d.ts
declare module '@react-three/rapier' {
    export const RigidBody: any; // Ganti dengan tipe yang sesuai jika tersedia
  }
  
  declare module 'meshline' {
    export const MeshLineGeometry: any;
    export const MeshLineMaterial: any;
  }
  // custom.d.ts
declare module '@react-three/rapier' {
  export const BallCollider: any;
  export const CuboidCollider: any;
  export const Physics: any;
  export const useRopeJoint: any;
  export const useSphericalJoint: any;
}
