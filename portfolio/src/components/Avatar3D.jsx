import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * Avatar3D Component
 * Interactive 3D canvas rendering a stylized glowing 3D avatar core,
 * orbiting tech icons (Python, React, ML, DSA, SQL), star particles,
 * and dynamic mouse-tracking tilt effects.
 */
const Avatar3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire 3D avatar assembly
    const avatarGroup = new THREE.Group();
    scene.add(avatarGroup);

    // 1. Central Core Sphere (Developer Brain / Avatar Core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 3);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      emissive: 0x0f172a,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    avatarGroup.add(coreMesh);

    // Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.75,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    avatarGroup.add(innerMesh);

    // 2. Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.4 });
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    avatarGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.35 });
    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    avatarGroup.add(ring2);

    // 3. Orbiting Tech Satellites (Nodes representing Python, React, ML, DSA, SQL)
    const techNodes = [];
    const colors = [0x38bdf8, 0xa855f7, 0x34d399, 0xfbbf24, 0xec4899];
    const nodeCount = 5;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.6;
      const nodeGeo = new THREE.SphereGeometry(0.2, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.6,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      
      // Position node on orbital plane
      nodeMesh.position.x = Math.cos(angle) * radius;
      nodeMesh.position.y = Math.sin(angle) * radius * 0.4;
      nodeMesh.position.z = Math.sin(angle) * radius;
      
      avatarGroup.add(nodeMesh);
      techNodes.push({ mesh: nodeMesh, angle, radius, color: colors[i] });
    }

    // 4. Background Star Particle Galaxy Field
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 3, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const purplePointLight = new THREE.PointLight(0xa855f7, 2, 50);
    purplePointLight.position.set(-5, -5, 5);
    scene.add(purplePointLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = x * 0.0015;
      mouseY = y * 0.0015;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate core mesh
      coreMesh.rotation.y = elapsedTime * 0.3;
      coreMesh.rotation.x = elapsedTime * 0.15;
      innerMesh.rotation.y = -elapsedTime * 0.2;

      // Rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Animate tech satellite orbits
      techNodes.forEach((node, index) => {
        const currentAngle = node.angle + elapsedTime * (0.5 + index * 0.1);
        node.mesh.position.x = Math.cos(currentAngle) * node.radius;
        node.mesh.position.y = Math.sin(currentAngle) * (node.radius * 0.4);
        node.mesh.position.z = Math.sin(currentAngle * 0.8) * node.radius;
      });

      // Rotate particle starfield
      particlesMesh.rotation.y = elapsedTime * 0.03;

      // Smooth mouse tracking interpolation (Lerp)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      avatarGroup.rotation.y = targetX * 1.5;
      avatarGroup.rotation.x = -targetY * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '420px' }}>
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '420px',
          cursor: 'grab',
        }}
      />
      {/* Visual Overlay Label */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(15, 23, 42, 0.75)',
          padding: '6px 16px',
          borderRadius: '20px',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          fontSize: '0.8rem',
          color: '#38bdf8',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none',
        }}
      >
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }} />
        Interactive 3D Tech Avatar (Move Mouse to Tilt)
      </div>
    </div>
  );
};

export default Avatar3D;
